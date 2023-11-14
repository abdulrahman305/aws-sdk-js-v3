// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CreateResolverEndpointRequest, CreateResolverEndpointResponse } from "../models/models_0";
import { de_CreateResolverEndpointCommand, se_CreateResolverEndpointCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateResolverEndpointCommand}.
 */
export interface CreateResolverEndpointCommandInput extends CreateResolverEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateResolverEndpointCommand}.
 */
export interface CreateResolverEndpointCommandOutput extends CreateResolverEndpointResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p>
 *          <ul>
 *             <li>
 *                <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC
 * 				from your network.</p>
 *             </li>
 *             <li>
 *                <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC
 * 				to your network.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateResolverEndpointCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateResolverEndpointCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // CreateResolverEndpointRequest
 *   CreatorRequestId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   SecurityGroupIds: [ // SecurityGroupIds // required
 *     "STRING_VALUE",
 *   ],
 *   Direction: "INBOUND" || "OUTBOUND", // required
 *   IpAddresses: [ // IpAddressesRequest // required
 *     { // IpAddressRequest
 *       SubnetId: "STRING_VALUE", // required
 *       Ip: "STRING_VALUE",
 *       Ipv6: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ResolverEndpointType: "IPV6" || "IPV4" || "DUALSTACK",
 *   OutpostArn: "STRING_VALUE",
 *   PreferredInstanceType: "STRING_VALUE",
 * };
 * const command = new CreateResolverEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateResolverEndpointResponse
 * //   ResolverEndpoint: { // ResolverEndpoint
 * //     Id: "STRING_VALUE",
 * //     CreatorRequestId: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     SecurityGroupIds: [ // SecurityGroupIds
 * //       "STRING_VALUE",
 * //     ],
 * //     Direction: "INBOUND" || "OUTBOUND",
 * //     IpAddressCount: Number("int"),
 * //     HostVPCId: "STRING_VALUE",
 * //     Status: "CREATING" || "OPERATIONAL" || "UPDATING" || "AUTO_RECOVERING" || "ACTION_NEEDED" || "DELETING",
 * //     StatusMessage: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     ModificationTime: "STRING_VALUE",
 * //     ResolverEndpointType: "IPV6" || "IPV4" || "DUALSTACK",
 * //     OutpostArn: "STRING_VALUE",
 * //     PreferredInstanceType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateResolverEndpointCommandInput - {@link CreateResolverEndpointCommandInput}
 * @returns {@link CreateResolverEndpointCommandOutput}
 * @see {@link CreateResolverEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateResolverEndpointCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request caused one or more limits to be exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource that you tried to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 */
export class CreateResolverEndpointCommand extends $Command<
  CreateResolverEndpointCommandInput,
  CreateResolverEndpointCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateResolverEndpointCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateResolverEndpointCommandInput, CreateResolverEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateResolverEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "CreateResolverEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53Resolver",
        operation: "CreateResolverEndpoint",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateResolverEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateResolverEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateResolverEndpointCommandOutput> {
    return de_CreateResolverEndpointCommand(output, context);
  }
}

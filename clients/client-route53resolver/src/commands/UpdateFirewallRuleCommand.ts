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

import { UpdateFirewallRuleRequest, UpdateFirewallRuleResponse } from "../models/models_0";
import { de_UpdateFirewallRuleCommand, se_UpdateFirewallRuleCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateFirewallRuleCommand}.
 */
export interface UpdateFirewallRuleCommandInput extends UpdateFirewallRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFirewallRuleCommand}.
 */
export interface UpdateFirewallRuleCommandOutput extends UpdateFirewallRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified firewall rule. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateFirewallRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateFirewallRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // UpdateFirewallRuleRequest
 *   FirewallRuleGroupId: "STRING_VALUE", // required
 *   FirewallDomainListId: "STRING_VALUE", // required
 *   Priority: Number("int"),
 *   Action: "ALLOW" || "BLOCK" || "ALERT",
 *   BlockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 *   BlockOverrideDomain: "STRING_VALUE",
 *   BlockOverrideDnsType: "CNAME",
 *   BlockOverrideTtl: Number("int"),
 *   Name: "STRING_VALUE",
 * };
 * const command = new UpdateFirewallRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFirewallRuleResponse
 * //   FirewallRule: { // FirewallRule
 * //     FirewallRuleGroupId: "STRING_VALUE",
 * //     FirewallDomainListId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Priority: Number("int"),
 * //     Action: "ALLOW" || "BLOCK" || "ALERT",
 * //     BlockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 * //     BlockOverrideDomain: "STRING_VALUE",
 * //     BlockOverrideDnsType: "CNAME",
 * //     BlockOverrideTtl: Number("int"),
 * //     CreatorRequestId: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     ModificationTime: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateFirewallRuleCommandInput - {@link UpdateFirewallRuleCommandInput}
 * @returns {@link UpdateFirewallRuleCommandOutput}
 * @see {@link UpdateFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested state transition isn't valid. For example, you can't delete a firewall
 * 			domain list if it is in the process of being deleted, or you can't import domains into a
 * 			domain list that is in the process of being deleted.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You have provided an invalid command. Supported values are <code>ADD</code>,
 * 			<code>REMOVE</code>, or <code>REPLACE</code> a domain.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 */
export class UpdateFirewallRuleCommand extends $Command<
  UpdateFirewallRuleCommandInput,
  UpdateFirewallRuleCommandOutput,
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
  constructor(readonly input: UpdateFirewallRuleCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFirewallRuleCommandInput, UpdateFirewallRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFirewallRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "UpdateFirewallRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53Resolver",
        operation: "UpdateFirewallRule",
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
  private serialize(input: UpdateFirewallRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateFirewallRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFirewallRuleCommandOutput> {
    return de_UpdateFirewallRuleCommand(output, context);
  }
}

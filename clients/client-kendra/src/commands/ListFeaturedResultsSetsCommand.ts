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

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { ListFeaturedResultsSetsRequest, ListFeaturedResultsSetsResponse } from "../models/models_0";
import { de_ListFeaturedResultsSetsCommand, se_ListFeaturedResultsSetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFeaturedResultsSetsCommand}.
 */
export interface ListFeaturedResultsSetsCommandInput extends ListFeaturedResultsSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListFeaturedResultsSetsCommand}.
 */
export interface ListFeaturedResultsSetsCommandOutput extends ListFeaturedResultsSetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all your sets of featured results for a given index. Features results
 *             are placed above all other results for certain queries. If there's an exact match
 *             of a query, then one or more specific documents are featured in the search results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListFeaturedResultsSetsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListFeaturedResultsSetsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // ListFeaturedResultsSetsRequest
 *   IndexId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFeaturedResultsSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListFeaturedResultsSetsResponse
 * //   FeaturedResultsSetSummaryItems: [ // FeaturedResultsSetSummaryItems
 * //     { // FeaturedResultsSetSummary
 * //       FeaturedResultsSetId: "STRING_VALUE",
 * //       FeaturedResultsSetName: "STRING_VALUE",
 * //       Status: "ACTIVE" || "INACTIVE",
 * //       LastUpdatedTimestamp: Number("long"),
 * //       CreationTimestamp: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFeaturedResultsSetsCommandInput - {@link ListFeaturedResultsSetsCommandInput}
 * @returns {@link ListFeaturedResultsSetsCommandOutput}
 * @see {@link ListFeaturedResultsSetsCommandInput} for command's `input` shape.
 * @see {@link ListFeaturedResultsSetsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 */
export class ListFeaturedResultsSetsCommand extends $Command<
  ListFeaturedResultsSetsCommandInput,
  ListFeaturedResultsSetsCommandOutput,
  KendraClientResolvedConfig
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
  constructor(readonly input: ListFeaturedResultsSetsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFeaturedResultsSetsCommandInput, ListFeaturedResultsSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFeaturedResultsSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "ListFeaturedResultsSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSKendraFrontendService",
        operation: "ListFeaturedResultsSets",
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
  private serialize(input: ListFeaturedResultsSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFeaturedResultsSetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFeaturedResultsSetsCommandOutput> {
    return de_ListFeaturedResultsSetsCommand(output, context);
  }
}
